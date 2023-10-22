import React from "react";
import {useForm} from 'react-hook-form' 

export const Form = () => {

	const { register, handleSubmit } = useForm()

	function createUser(data: any) {
		console.log(data)
	}

  return (
    <div className="App w-full h-full flex flex-col items-center justify-center">
		<div>
			<h1
				className='font-bold text-[24px] mt-[30px]'
				style={{ lineHeight: '20px' }}
			>
				{' '}
				Hi, Wellcome Back!
			</h1>
			<p className='font-light text-[14px] mt-[15px] text-[#767676]'>
				Hello again, you've been missed!
			</p>
		</div>
      	<form onSubmit={handleSubmit(createUser)} className='mt-[30px] flex flex-col gap-[20px] w-[400px]'>
			<div className='inputControl flex flex-col gap-[3px] relative'>
				<label htmlFor='email' className='font-semibold text-[12px]'>
					{' '}
					Email Address{' '}
				</label>
				<input
					className='input w-full h-[45px] transition-colors duration-300 outline-none rounded-md px-[20px]'
					style={{ border: '1px solid #c7c7c7' }}
					type='email'
					placeholder='Enter your email'
					{...register('email')}
				/>
			</div>
			<div className='inputControl flex flex-col gap-[3px] relative'>
				<label htmlFor='password' className='font-semibold text-[12px]'>
					Password
				</label>
				<input
					className='input w-full h-[45px] transition-colors duration-300 outline-none rounded-md px-[20px]'
					style={{ border: '1px solid #c7c7c7' }}
					type='password'
					placeholder='Enter your password'/>
			</div>
			<div className='inputControl flex justify-between'>
				<div className='flex gap-[10px] items-center justify-start'>
					<input
						type='checkbox'
						name='conditions'
						className='w-[20px] h-[20px] rounded-md'
					/>{' '}
					<label htmlFor='password' className='font-semibold text-[13px]'>
						Remember Me
					</label>
				</div>
				<div>
					<p className='font-semibold text-[13px] text-red-400'>
						Forgot Password
					</p>
				</div>
			</div>
			<button
				type='submit'
				className='w-full h-[45px] rounded-md bg-blue-500 text-white mt-[35px] text-[14px]'
			>
				Login
			</button>
		</form>																				
    </div>
  );
}
