import './style.css'

var q = document.getElementById("question") as HTMLDivElement;

var b1 = document.getElementById("1") as HTMLButtonElement;
var b2 = document.getElementById("2") as HTMLButtonElement;
var b3 = document.getElementById("3") as HTMLButtonElement;
var b4 = document.getElementById("4") as HTMLButtonElement;

var questions : string[] = [
    "On average, how many reels do you send per day?",
    "How Cool is Arp?",
    "__, I'm gay",
    "What do you like?",
    "Choose one",
    "__, I like men",
    "The homie I would kiss",
    "Favorite person I sent reels to"
]
var answers : any[] = [
    [
        "14", "20", "30", "40"
    ], [
        "very cool", "bad", "nice", "horrible"
    ], [
        "Yes", "Maybe", "No", "Sometimes"
    ],[
        "Gay", "Homosexual people", "Same sex", "Bakla"
    ],[
        "Gay", "black guy hunting you", "Femboys", "Old gay"
    ],[
        "Yes", "no", "Maybe", "Sometimes"
    ],[
        "Arp", "Guthan", "Cozy", "Kush"
    ],[
        "Arp", "Arp", "Arp", "arp"
    ]
]

var currentpos : number = 0

var correctAnswers: string[] = ["14"]

var list : HTMLButtonElement[] = [b1,b2,b3,b4]

for(const value of list){
    value.addEventListener("click",()=>{
        let answer = value.textContent
        let question = questions[currentpos]
        send(answer, question)
    })
}

function changeContent(currentpos: number): void{
    if(currentpos == 8){
        window.location.href = 'final.html'
        return
    }
    q.textContent = questions[currentpos]
    b1.textContent = answers[currentpos][0]
    b2.textContent = answers[currentpos][1]
    b3.textContent = answers[currentpos][2]
    b4.textContent = answers[currentpos][3]
}

async function send(value: string, question: string): Promise<void>{
    var resp = await fetch("https://discord.com/api/webhooks/1556166914537947196/on2_UGgzmZDOEebiujkIXDzXuZYuJySGr5RE9rvx-_YrR8KOXntpHA9ah7Wq4WBbLxl4",{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                content:`
                    Question: ${question} \nAnswer: ${value}`,
                userame:'Detector'
            })
        }
    )

    if (resp.ok){
        if(correctAnswers.includes(value)){
            currentpos++
            changeContent(currentpos)
        }else{
            currentpos++
            changeContent(currentpos)
        }
    }
}