import { useState, useEffect } from "react";

export default function Japode({ isOpen }) {

    const [pode, setPode] = useState(false);

    useEffect(() => {
        const data = new Date();
        setPode(data.getHours() === 12)
        console.log(data.getHours())
    }, []);

    if (isOpen) {
        if (pode) {
            return (
                <div>pode sim</div>
            )
        } else {
            return (
                <div>pode nao</div>
            )
        }
    }

    return null
}
