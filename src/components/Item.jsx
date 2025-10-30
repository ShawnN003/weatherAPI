import CurrencyName from "./CurrencyName";
export default function Item(prop) {
    return (
        <>
            <p>Hello</p>
            <CurrencyName money={prop.name} />
        </>
    )
}