function Car(props) {

    // using destructure we can get the property
    const { carInfo } = props;
    const { brand, color } = carInfo; // PROPS

    const text = `Hi , Iam a ${color} ${brand} Car`;
    return (
        <h2>{text}</h2>
    )
}

export default Car;