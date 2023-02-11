function FormTweet() {
  return (
    <form action="">
      <input
        type="text"
        name="tweet"
        placeholder="¿Qué estas pensando?"
        id=""
      />
      <div>
        <i className="fa-solid fa-images"></i>
      </div>
      <input type="file" style={{ display: "none" }} name="" id="" />
      <input type="submit" value="twittear" />
    </form>
  );
}

export default FormTweet;
