import RegionName from "./RegionName";
export default function Item({ country }) {
    return (
        <div>
            <p>Hello</p>
            <RegionName location ={country.subregion} />
        </div>
    )
}