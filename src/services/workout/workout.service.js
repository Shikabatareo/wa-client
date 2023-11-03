import { $axios } from '../../api'
export const WORKOUTS = '/workouts'
class WorkoutService {
	async getALL() {
		return $axios.get(WORKOUTS)
	}
	async getId(id) {
		return $axios.get(`${WORKOUTS}/${id}`)
	}
	async create(body) {
		return $axios.post(WORKOUTS, body)
	}
	async update(body, id) {
		return $axios.put(`${WORKOUTS}/${id}`, body)
	}
	async delete(id) {
		return $axios.delete(`${WORKOUTS}/${id}`)
	}
}

export default new WorkoutService()
