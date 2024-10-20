function Author(props) {

    return (
        <p className="">
            Sitio creado por{" "}
            <a className="text-sky-400">
                {props.author}
            </a>{" "}
            2024.
        </p>
    )
  };
  
  export default Author