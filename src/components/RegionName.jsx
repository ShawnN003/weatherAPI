export default function RegionName({ location }) {

    const values = Object.values(location);

    return (
        <>
            <h3>Region</h3>

            {location}
        </>
    )
}