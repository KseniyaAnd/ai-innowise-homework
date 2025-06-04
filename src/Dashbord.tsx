import React, { useEffect, useState } from 'react';

export default function Dashboard() {
    const [d, setD] = useState<number | null>(null);

    useEffect(() => {
        const worker = new Worker(`${process.env.PUBLIC_URL}/sumWorker.js`);

        worker.postMessage(null);

        worker.onmessage = (e: MessageEvent) => {
            setD(e.data);
        };

        return () => {
            worker.terminate();
        };
    }, []);

    return <div>{d !== null ? d : 'Calculating...'}</div>;
}
