import RegionName from "./RegionName";
export default function Item({ country }) {
    return (
        <>
            <p>Hello</p>
            <RegionName location ={country.region} />
        </>
    )
}