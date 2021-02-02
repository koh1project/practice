const SideMenu = (props) => {
  const { count } = props;
  return(
    <div>
      <button onClick={props.clickHandler}>Click ME!</button>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">Category 1</a>
        <a href="#" className="list-group-item">Category 2</a>
        <a href="#" className="list-group-item">Category 3</a>
      </div>
      <div>

        <div>
          <h1>{count}</h1>
        </div>
      </div>

    </div>
  );
};

export default SideMenu;