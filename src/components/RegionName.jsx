export default function RegionName({ location }) {
    if (!location) return null;
    const values = Object.values(location);

    return (
        <>
            <h3>Region Info</h3>
            <p>Country Name: {location.name.common}</p>
            <p>Region: {location.region}</p>
            <p>Subregion: {location.subregion}</p>
        </>
    )
}