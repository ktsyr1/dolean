import { useForm } from "react-hook-form"

export default function FormTest() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    let onSubmit = res => {
        console.log(res);
        
    }

    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col *:p-4 *:m-4" >
            <input {...register("fullName", { required: "هذا العنصر ضروري" })} />

            <input {...register("email", { required: "هذا العنصر ضروري" })} />
            {errors.email && <span className="text-red-600">{errors.email.message}</span>}

            <input type="submit" />
        </form>
    )
}


// npm install react-hook-form
// new Component
// import
// init
// const { register, handleSubmit,  formState: { errors } } = useForm()
//  <form onSubmit={handleSubmit(onSubmit)}>
