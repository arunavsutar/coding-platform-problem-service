const { Problem } = require("../models");
const NotFoundError = require("../errors/notfound.error");

class ProblemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : []
            })
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            throw error;
        }
    }

    async getProblem(id) {
        try {
            console.log("The id we are getting is = ", typeof id);
            const problem = await Problem.findById(id);
            console.log(problem);
            if (!problem) {
                console.log("Inside cond'n", problem);
                throw new NotFoundError("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id);
            if (!deletedProblem) {
                console.log("On not condition.........");
                throw new NotFoundError("problem", id);
            }
            return deletedProblem;
        } catch (error) {
            throw error;
        }
    }
    async updateProblem(id, updatedData) {
        try {
            const updatedProblem = await Problem.findOneAndUpdate({ _id: id }, updatedData, { new: true });
            if (!updatedProblem) {
                throw new NotFoundError("Problem", id);
            }
            return updatedProblem;
        } catch (error) {
            console.log("On repository Update");
            throw error
        }
    }
}


module.exports = ProblemRepository;