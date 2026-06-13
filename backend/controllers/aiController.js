
const {GoogleGenerativeAI} = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const analyzeResume = async(req, res) =>{
    try{

        const {resume, jobDescription} = req.body

        if(!resume || !jobDescription){
            return res.status(400).json({message: "Resume and job description are required"})
        }

        const model = genAI.getGenerativeModel({model: "gemini-flash-lite-latest"})

        const prompt = `You are an expert resume reviewer. 
        Job Description: ${jobDescription}
        Resume: ${resume}
         Analyze this resume against the job description and provide:
        1. A match score out of 100
        2. Top 3 missing skills
        3. Top 3 specific improvements
        4. One encouraging sentence
      
        Keep it concise and practical.
        `
        const result = await model.generateContent(prompt)
        const feedback = result.response.text()

        res.status(200).json({feedback})


    }catch(err){
        res.status(500).json({ message: err.message })
    }


}


module.exports = { analyzeResume }