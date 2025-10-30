import RegionName from "./RegionName";
export default function Item(prop) {
    return (
        <>
            <p>Hello</p>
            <RegionName location ={prop.country.region} />
        </>
    )
}