import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="formContainer">
        <form className=" w-25 mx-auto gap-3 my-5">
          {/* <label htmlFor="name">Name : </label> */}
          <div className=" w-100 bg-black">
            <input name="name" className="name w-100" type="text" placeholder="enter title" />
          </div>
          <div>
            <textarea name="textarea" cols="50" rows="3" placeholder="enter description" />
          </div>
          <div>
            <button type="submit" className="btn btn-dark">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
