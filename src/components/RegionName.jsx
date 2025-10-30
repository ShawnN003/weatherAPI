export default function RegionName({ location }) {

    const values = Object.values(location);
    const region = values.map(data => {
        return <p key={data.name}>{data.name} ({data.symbol})</p>
    })

    return (
        <>
            <h3>Region</h3>
            {location}
        </>
    )
}