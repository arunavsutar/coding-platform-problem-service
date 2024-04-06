const { sanitizeMarkdownContent } = require("../utils");


class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }
    async createProblem(problemData) {
        try {
            problemData.description = sanitizeMarkdownContent(problemData.description);
            const problem = await this.problemRepository.createProblem(problemData);
            return problem;
        } catch (error) {
            throw error;
        }
    }
    async getAllProblems() {
        try {
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        }
        catch (error) {
            throw error;
        }
    }

    async getProblem(problemId) {
        try {
            const problem = await this.problemRepository.getProblem(problemId);
            return problem;
        }
        catch (error) {
            throw error;
        }

    }

    async deleteProblem(problemId) {
        try {
            const problem = await this.problemRepository.deleteProblem(problemId);
            return problem;
        }
        catch (error) {
            throw error;
        }

    }

    async updateProblem(problemId, updatedData) {
        try {
            if (updatedData.description) {
                updatedData.description = sanitizeMarkdownContent(updatedData.description);
            }
            const problem = await this.problemRepository.updateProblem(problemId, updatedData);
            return problem;
        }
        catch (error) {
            console.log("On service Update");
            throw error;
        }

    }
}

module.exports = ProblemService;