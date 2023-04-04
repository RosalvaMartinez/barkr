import DietForm from '../components/DietForm'
import StaminaForm from '../components/StaminaForm';
import TreatsVitaminsForm from '../components/TreatsVitaminsForm';
import MacroNutrientsForm from '../components/MacroNutrientsForm';
import ExerciseForm from '../components/ExerciseForm';

function DogProfile() {
    return (
        <>
            <div className="flex flex-col justify-center place-items-center sm:flex-row">
                <div className="">
                    <ExerciseForm />
                    <MacroNutrientsForm />
                </div>
                <div>
                    <StaminaForm />
                    <DietForm />
                    <TreatsVitaminsForm />
                </div>
            </div>
        </>
    )
};

export default DogProfile;