export default function CarForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        console.log(formData);

        const res = await fetch('/api/cars', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Make:</h3>
            <input name="make" type="text" />
            <h3>Model:</h3>
            <input name="model" type="text" />
            <h3>Image:</h3>
            <input name="image" type="text" />
            <h3>Description:</h3>
            <textarea name="description" type="text" />
            <br></br>
            <button type="submit">Create Car</button>

        </form>
    );
}