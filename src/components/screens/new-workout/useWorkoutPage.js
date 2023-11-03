import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import WorkoutService from '../../../services/workout/workout.service'
export const useWorkoutPage = () => {
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
		['create workout'],
		body => WorkoutService.create(body),
		{
			onSuccess: () => {
				reset({
					name: '',
					exerciseIds: []
				})
			}
		}
	)
	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		})
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
