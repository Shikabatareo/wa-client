import { $axios } from '../../api'
export const EXERCISES = '/exercises'
class ExerciseService {
	async getALL() {
		return $axios.get(EXERCISES)
	}
	async create(body) {
		return $axios.post(EXERCISES, body)
	}
	async update(body, id) {
		return $axios.put(`${EXERCISES}/${id}`, body)
	}
	async delete(id) {
		return $axios.delete(`${EXERCISES}/${id}`)
	}
}

export default new ExerciseService()
