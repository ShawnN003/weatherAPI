export default function RegionName(prop) {

    const values = Object.values(prop.money);
    const region = values.map(data => {
        return <p key={data.name}>{data.name} ({data.symbol})</p>
    })

    return (
        <>
            <h3>Region</h3>
            {region}
        </>
    )
}