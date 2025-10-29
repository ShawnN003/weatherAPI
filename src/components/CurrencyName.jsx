export default function CurrencyName(prop) {

    const values = Object.values(prop.money);
    const currencies = values.map(data => {
        return <p key={data.name}>{data.name} ({data.symbol})</p>
    })

    return (
        <>
            <h3>Currencies</h3>
            {currencies}
        </>
    )
}