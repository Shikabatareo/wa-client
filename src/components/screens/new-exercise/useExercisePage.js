import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import ExerciseService from '../../../services/exercise/exercise.service'
export const useExercisePage = () => {
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})
	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create exercise'],
		body => ExerciseService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)
	const onSubmit = data => {
		mutate(data)
	}
	return useMemo(
		() => ({
			control,
			isSuccess,
			error,
			register,
			handleSubmit,
			reset,
			errors,
			isLoading,
			onSubmit
		}),
		[errors, isLoading]
	)
}
