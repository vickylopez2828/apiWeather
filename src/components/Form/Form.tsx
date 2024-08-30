
import { countries } from "../../data/countries"
import style from './Form.module.css'
import { SearchType } from "../../types"
import { useForm } from "react-hook-form"
import Error from "../Error/Error"


type FormProps = {
    fetchWeather : (search: SearchType) => Promise<void>
}

const Form = ({fetchWeather}: FormProps) => {

    const { register, handleSubmit, formState: {errors} } = useForm<SearchType>();

    const searchWeather = (data: SearchType) =>{
        
        fetchWeather(data)
    }

  return (
    <form className={style.form} onSubmit={handleSubmit(searchWeather)}>
        <div className={style.field}>
            <label htmlFor="city">Ciudad:</label>
            <input 
                type="text" 
                id="city"
                //value={search.city}
                placeholder="Ciudad"
                {...register('city', {
                        required:'El campo es obligatorio'
                    })
                }
                name="city"
               // onChange={handleChange}
            />
            {
                errors.city && (
                    <Error>
                        {errors.city?.message}
                    </Error>
                )
            }
            
        </div>
        <div className={style.field}>
            <label htmlFor="country">País:</label>
            <select 
               // value={search.country} 
                id="country"
                {...register('country', {
                    required:'El campo es obligatorio'
                })
            }
                name="country" 
               // onChange={handleChange}
            >
                <option value=''>-- Seleccione un país --</option>
                {
                    countries.map(country =>(
                        <option
                            key={country.code}
                            value={country.code}   
                        >
                        {country.name}
                        </option>
                    ))
                }
            </select>
            {
                errors.country && (
                    <Error>
                        {errors.country?.message}
                    </Error>
                )
            }
        </div>
        <input className={style.submit} type="submit" value='Consultar Clima' />
      
    </form>
  )
}

export default Form
