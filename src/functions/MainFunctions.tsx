export const MainFunctions = {
    showValue: <T extends object> (value: T) => {
        const render = (obj: T) => {
            return Object.entries(obj).map(([key, item]) => {
                if (typeof item === "object" && item !== null) {
                    return (
                        <div key={key}>
                            <p>{key}</p>
                            <div style={{ marginLeft: 20 }}>{render(item)}</div>
                        </div>
                    )
                } else {
                    return (
                        <p key={key}>
                            {key}: {String(item)}
                        </p>
                    )
                }
            });
        }

        return <div>{render(value)}</div>

    }

}
