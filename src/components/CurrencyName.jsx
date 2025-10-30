export default function CurrencyName(prop) {

    const values = Object.values(prop);
    const currencies = values.map(data => {
        return <p key={data.name.common}></p>
    })

    return (
        <>
            <h3>Output</h3>
            {currencies}
        </>
    )
}