import React from 'react';
import emailjs from 'emailjs-com';
// import { db } from '../components/firebase';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_sz397ad', 'template_shif3ph', e.target, 'user_ZogDT8y9QjMMo4vM44or9')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    alert("Your message has been sent successfully")
  }


  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const [loader, setLoader] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoader(true);

  //   db.collection("contacts")
  //     .add({
  //       name: name,
  //       email: email,
  //       message: message,
  //     })
  //     .then(() => {
  //       alert("Message has been submitted :)");
  //       setLoader(false);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       setLoader(false);
  //     });
  // Empty input field after submitted...
  //   setName('');
  //   setEmail('');
  //   setMessage('');
  // };

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-red-500" id="contact">
      <div className="flex flex-col justify-evenly md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full p-8 sm:p-12 sm:rounded-0 text-white overflow-hidden">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1
              style={{ fontFamily: 'lobster' }}
              className="font-bold text-5xl tracking-wide">Contact me</h1>
            <p className="pt-2 text-red-300 text-sm sm:text-base">
              Reach out to me by filling in this form.<br />
              I will definetly like to here from you. Maybe we could meet for a coffee?
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <ion-icon
                name="call-outline"
                class="text-red-300 text-xl sm:text-3xl">
              </ion-icon>
              <span>0721-77 62 72</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <ion-icon
                name="mail-outline"
                class="text-red-300 text-xl sm:text-3xl">
              </ion-icon>
              <span>josefine.brorson@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <ion-icon
                name="pin-outline"
                class="text-red-300 text-xl sm:text-3xl">
              </ion-icon>
              <span>Stockholm, Sweden</span>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/josefine-brorson-b8a69a118/"
            >
              <ion-icon name="logo-linkedin" class="sm:text-3xl" /></a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/jbrorson">
              <ion-icon name="logo-github" class="sm:text-3xl" /></a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/jbrorson/">
              <ion-icon name="logo-instagram" class="sm:text-3xl" /></a>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-default shadow-xl p-8 text-gray-700 sm:w-80">
            <form
              // onSubmit={handleSubmit}
              onSubmit={sendEmail}
              action=""
              className="flex flex-col space-y-4">
              <div>
                <label for="" className="text-sm sm:text-base">Subject *</label>
                <input
                  required
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  className="bg-gray-200 ring-1 ring-gray-500 w-full rounded-sm px-4 py-2 mt-2 
                    outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label for="" className="text-sm sm:text-base">Your name *</label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  className="bg-gray-200 ring-1 ring-gray-500 w-full rounded-sm px-4 py-2 mt-2 
                    outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label for="" className="text-sm sm:text-base">Your email *</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Your email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-200 ring-1 ring-gray-500 w-full rounded-sm px-4 py-2 mt-2 
                    outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label for="" className="text-sm sm:text-base">Your message *</label>
                <textarea
                  required
                  rows="4"
                  type="text"
                  name="message"
                  placeholder="Your message"
                  // value={message}
                  // onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-200 ring-1 ring-gray-500 w-full rounded-sm px-4 py-2 mt-2 
                    outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <i className="text-gray-600">Please note that all inputs are required</i>
              <button
                // style={{ background: loader ? "#ccc" : "#f56565" }}
                type="submit"
                className="inline-block self-end px-5 py-3 uppercase mt-10 bg-red-400 rounded-md shadow-xl text-white text-sm font-semibold sm:text-base hover:bg-red-500">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}



