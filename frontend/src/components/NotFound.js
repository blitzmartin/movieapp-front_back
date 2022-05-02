import '../NotFound.css'

export default function NotFound() {
    return (
        <div className='notFoundWrapper'>
            <h1>404 not found!</h1>
            <h3>Something went wrong...</h3>
            <img src="/images/404_computer.png" alt="404-error" />
        </div>
    )
}