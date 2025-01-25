import { useForm, SubmitHandler } from 'react-hook-form';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser} from '../../Types/types';
import { UserType } from '../../Types/constants';
import { login } from '../../utils/fetchfuncs';

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>();

  const onSubmit: SubmitHandler<LoginUser> = async(data) => {
    const res = await login(data);
    if(res){
      navigate("/main/courses");
    };
  };

  return (
    <div className="flex justify-center items-center w-full h-full font-poppins">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <h1 className="text-ternary-color text-3xl font-semibold mb-6 text-center">
          Connectez-vous à Dz-Teacher
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <div className="flex items-center bg-gray-100 w-80 p-2 rounded-md">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                {...register('email', {
                  required: "L'email est requis.",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "L'email n'est pas valide.",
                  },
                })}
                type="email"
                placeholder="Email"
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <div className="flex items-center bg-gray-100 w-80 p-2 rounded-md">
              <FaLock className="text-gray-500 mr-2" />
              <input
                {...register('password', {
                  required: "Le mot de passe est requis.",
                  minLength: {
                    value: 8,
                    message: "Le mot de passe doit contenir au moins 8 caractères.",
                  },
                })}
                type="password"
                placeholder="Mot de passe"
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <div className="mb-4">
            <div className="bg-gray-100 w-80 p-2 rounded-md">
              <select
                {...register('type', { required: "Le type d'utilisateur est requis." })}
                className="w-full bg-transparent outline-none text-gray-700"
              >
                <option value="" disabled selected>
                  Sélectionnez le type d'utilisateur
                </option>
                <option value={UserType.student}>Étudiant</option>
                <option value={UserType.teacher}>Enseignant</option>
              </select>
            </div>
            {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>}
          </div>
          <div className="flex gap-2 mb-6">
            <span className="text-gray-400">Vous n'avez pas encore de compte ?</span>
            <span>
              <Link to="/auth/signup" className="text-ternary-extra-light-color text-md">
                Inscrivez-vous
              </Link>
            </span>
          </div>
          <button
            type="submit"
            className="w-80 bg-ternary-color text-white py-2 rounded-md hover:bg-opacity-90 transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
