const Notification = (props) => {
    const {className,imageUrl,messageText} = props;
    const containerClassName = `container ${className}`
    return(
        <div className={containerClassName}>
            <img className="icon" src={imageUrl}/>
            <p className="message">{messageText}</p>
        </div>
    );
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Notification</h1>
    <div "notification-container">
      <Notification 
        className = "primary-bg-color"
        imageUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        messageText = "Imformation Message"/> 
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
