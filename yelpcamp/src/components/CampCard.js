import Button from "./Button"


export default function CampCard (props) {
    const {title, description, photo } = props;
    return(
        <article className="border p-4 rounded">
            <img src={photo} className="rounded w-full h-auto object-contain" />
            <h3 className="font-bold my-4">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <Button title="View Campground" width />
        </article>
    )
}