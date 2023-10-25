import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { hobbies, languages } from '../utils/multiselect-options';
import 'react-phone-number-input/style.css'
import PhoneInput,{ isValidPhoneNumber } from 'react-phone-number-input'
import useSignup from '../hooks/useSignup';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [usn, setUsn] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('')
  const [desc, setDesc] = useState('')
  const [details, setDetails] = useState({branch:'', /*course:"engineering",*/ year:"1"}) //Stores occupation,organisation, degree or college
  const { signup, error, isLoading, isSucc } = useSignup();



const hobbiesDefault = selectedHobbies.map((el) => {
  return { key: el };
})

  const handleNextStep = () => {
    if (step === 1 && (!usn.trim() || !email.trim() || !name.trim() || !password.trim() || !confirmPassword.trim())) {
      toast.error('Please fill in all the required fields.');
      return;
    }

    if (step === 2 && (!phone.trim() || selectedLanguages.length === 0 || selectedHobbies.length === 0)) {
      toast.error('Please fill in all the required fields.');
      return;
    }

    if(step===3 && (!gender.trim() || !(age.toString().trim()) || !(details.branch) || !(details.branch.trim()))){
      toast.error('Please fill in all the required fields.');
      return;
    }

    if(step===4 && (!desc.trim() || !(details.year))){
      toast.error('Please fill in all the required fields.');
      return;
    }

    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone.trim() || selectedLanguages.length === 0 || selectedHobbies.length === 0) {
      toast.error('Please fill in all the required fields.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    if (!name.trim()) {
      toast.error('Please enter a valid name.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    //Checking if phone number is valid
    if(!isValidPhoneNumber(phone)){
      toast.error('Please enter a valid phone number');
      return;
    }

    if(age<5 || age>150){
      toast.error('Please enter a valid age');
      return;
    }

    if (!(details.branch.trim())){
      toast.error('Please enter the relevant Organization/College/University name!');
      return;
    }
      

    if (!(desc.trim())){
      toast.error('Your description is empty. Describe yourself please!');
      return;
    }


        const data ={
          description: desc.trim(),
          name,
          password, confirmPassword,
          languages: selectedLanguages, hobbies:selectedHobbies, email, phone, branch: details.branch, year: details.year,age, gender, 
        }
    
        signup(data);


  };

  const progressPercentage = (step / 4) * 100;

  return (
    <div className={step!==4 ? "mx-auto block p-6 max-w-sm bg-white rounded-lg border border-gray-300 shadow-md mt-14 mb-14" : "mx-auto block p-6 w-96 md:w-[30%] bg-white rounded-lg border border-gray-300 shadow-md mt-14 mb-14"}>
      {error && (
       <div className="p-4 mb-7 w-full text-center text-sm text-red-800 rounded-lg bg-red-200  dark:text-red-700 " role="alert"> {error}
     </div>
      )}
      {isSucc && (
        <div className="p-4 mb-7 w-full text-center text-sm text-green-800 rounded-lg bg-green-200  dark:text-green-700 " role="alert"> Succesfully signed in!</div>
      )}
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <div className="mb-8">
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-full bg-green-500 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
        {step === 1 && (
          <>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 font-medium">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block mb-2 font-medium">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded"
                disabled={isLoading}
                onClick={handleNextStep}
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-8">
              <label htmlFor="phone" className="block mb-2 font-medium">
                Phone Number:
              </label>
              <PhoneInput
      placeholder="Enter phone number"
      value={phone}
      defaultCountry='IN'
      onChange={setPhoneNumber}/>
              {/* <input
                type="text"
                id="phone"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={phone}
                onChange={(e) => setPhoneNumber(e.target.value)}
              /> */}
            </div>
            <div className="mb-8">
              <label htmlFor="languages" className="block mb-2 font-medium">
                Preferred Languages:
              </label>
             <Multiselect
          displayValue="key"
          className='bg-white text-black'
          // onKeyPressFn={function noRefCheck(){}}
          selectedValues={langDefault}
          onRemove={(e) => setSelectedLanguages(e.map((ele) => {
            return ele.key
          }))}
          // onSearch={function noRefCheck(){}}
          onSelect={(e) => setSelectedLanguages(e.map((ele) => {
            return ele.key
          }))}
          options={languages}
          showCheckbox
          placeholder={'Select Languages'}
        />

            </div>
            <div className="mb-8">
              <label htmlFor="hobbies" className="block mb-2 font-medium ">
                Preferred Topics:
              </label>
              <Multiselect
              id="hobbies"
          displayValue="key"
          className='bg-white'
          // onKeyPressFn={function noRefCheck(){}}
          selectedValues={hobbiesDefault}
          onRemove={(e) => setSelectedHobbies(e.map((ele) => {
            return ele.key
          }))}
          // onSearch={function noRefCheck(){}}
          onSelect={(e) => setSelectedHobbies(e.map((ele) => {
            return ele.key
          }))}
          options={hobbies}
          placeholder={'Select Topics'}
          showCheckbox
        />
            </div>
            <div className="flex justify-end">
               <button
                type="button"
                className="px-4 py-2 bg-blue-200 text-gray-800 rounded mr-2"
                onClick={handlePreviousStep} 
              >
                Previous
              </button>
               <button type="button" className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleNextStep} >
                Next
              </button>
            </div>
          </>
        )}

{step === 3 && (
          <>
            <div className="mb-8">
              <label htmlFor="gender" className="block mb-2 font-medium">
                Gender
              </label>
              <select
        id="gender"
        className="px-2 py-1 border rounded w-full" onChange={(e)=>setGender(e.target.value) }
        defaultValue="male"
      >
        <option value="male" >Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>
            </div>
            <div className="mb-8">
              <label htmlFor="age" className="block mb-2 font-medium">
                Age:
              </label>
              <input
                type="number"
                id="age"
                min="8"
                max="120"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <label htmlFor="hobbies" className="block mb-2 font-medium ">
                Working Status:
              </label>
              <select
        id="status"
        className="px-2 py-1 border rounded w-full" value={details.status} onChange={(e)=>setDetails(prev => {return {...prev, status:e.target.value}})} defaultValue={"student"}
      >
        <option value="working">Working</option>
        <option value="student">Student</option>
      </select>
            </div>
            <div className="flex justify-end">
               <button
                type="button"
                className="px-4 py-2 bg-blue-200 text-gray-800 rounded mr-2"
                onClick={handlePreviousStep}
              >
                Previous
              </button>
               <button type='button' className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleNextStep}>
                Next
              </button>
            </div>
          </>
        )}

        {step===4 && (<>
          <div className="mb-8">
              <label htmlFor="industry" className="block mb-2 font-medium ">
                Year:
              </label>
              <select
        id="status"
        className="px-2 py-1 border rounded w-full" value={details.industry} onChange={(e)=>setDetails(prev => {return {...prev, year:e.target.value}})} defaultValue={"1"}
      >
        <option value="1">1st year</option>
        <option value="2">2nd year</option>
        <option value="3">3rd year</option> 
        <option value="4">4th year</option>
      </select>
            </div>
            <div className="mb-8">
              <label htmlFor="industry" className="block mb-2 font-medium ">
                Branch:
              </label>
              <input type="text" 
        id="status"
        className="px-2 py-1 border rounded w-full" value={details.organization} onChange={(e)=>setDetails(prev => {return {...prev, branch:e.target.value}})}
      />
            </div>
          <div className="mb-8 w-full">
      <label htmlFor="description" className="text-md font-semibold mb-2 block">
        Describe Yourself:
      </label>
      <textarea
        id="description"
        className="w-full h-40 p-2 border border-gray-300 rounded focus:outline-none block"
        placeholder="Enter your description..."
        value={desc}
        onChange={e => setDesc(e.target.value)}
      ></textarea>
    </div>

    <div className="flex justify-end">
               {(!isLoading || !isSucc) && <button
                type="button"
                className="px-4 py-2 bg-blue-200 text-gray-800 rounded mr-2"
                onClick={handlePreviousStep} disabled={isLoading}
              >
                Previous
              </button>}
               <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded"  disabled={isLoading || isSucc}>
                {isLoading? 'Loading...':'Sign Up'}
              </button>
            </div>
        </>)}

      </form>
    </div>
  );
};

export default SignUp;