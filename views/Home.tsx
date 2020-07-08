import View from "../components/View";
import Button from "../elements/Button";
import Form from "../components/Form";

const Home = () => {
    const fields = [
        {
            type: 'text',
            name: 'email',
            value: 'segailbailey+1@gmail.com'
        }
    ]

    const onSubmit = () => { }

    return (
        <View>
            <h1>My starter pack</h1>
            <h2>TODO:</h2>
            <ul>
                <li>
                    <del>Buttons</del>
                </li>
                <li>
                    <del>Loading state</del>
                </li>
                <li>
                    <del>Forms</del>
                </li>
                <li>
                    <del>Form errors</del>
                </li>
                <li>
                    <del>Form validation</del>
                </li>
                <li>
                    <del>On submit doesnt accept defaults</del>
                </li>
                <li>
                    <del>Form defaults</del>
                </li>
                <li>
                    <del>Mailchimp Integration</del>
                </li>
                <li>React Form Hooks</li>
                <li>Carts</li>
                <li>Payment (Stripe/PayPal)</li>
                <li>State Management</li>
                <li>CMS Service</li>
                <li>Error handling</li>
                <li>Testing</li>
            </ul>
            <Form fields={fields} onSubmit={onSubmit}>
                <Button type='submit'>Do thing</Button>
            </Form>
        </View>
    )
}

export default Home
