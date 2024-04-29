// GET запрос для получения вариантов ответа
const getServerVariantsData = async () => {
  const data = await fetch(
    "https://students.netoservices.ru/nestjs-backend/poll"
  );
  return data.json();
};

// POST запрос на сервер для получения статистики
const getAnswerStatistics = async (vote_id, buttonId) => {
  const statisticData = await fetch(
    "https://students.netoservices.ru/nestjs-backend/poll",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `vote=${vote_id}&answer=${buttonId}`,
    }
  );
  return statisticData.json();
};

// Получаем ответ пользователя и запрашиваем данные с сервера
const getUserAnswer = async (e, vote_id) => {
  alert("Спасибо, ваш голос засчитан!");
  const buttonId = e.currentTarget.id;
  const statisticData = await getAnswerStatistics(vote_id, buttonId);
  createStatistic(statisticData);
};

// Выводим статистику по ответам
const createStatistic = (statisticData) => {
  const totalVotes = Object.values(statisticData.stat).reduce((acc, answer) => {
    acc += answer.votes;
    return acc;
  }, 0);
  const answerPercentage = Object.values(statisticData.stat).reduce(
    (acc, answer) => {
      acc = {
        ...acc,
        [answer.answer]: ((answer.votes / totalVotes) * 100).toFixed(2),
      };
      return acc;
    },
    {}
  );
  const answerButtons = document.getElementById("poll__answers");
  answerButtons.classList.remove("flex__buttons");
  const statisticDataElementsArray = [];
  Object.keys(answerPercentage).forEach((key) => {
    const line = document.createElement("p");
    line.innerHTML = `${key}: <span class="bold">${answerPercentage[key]}%</span>`;
    statisticDataElementsArray.push(line);
  });
  answerButtons.replaceChildren(...statisticDataElementsArray);
};

// Создаем опросник с кнопками
const createQuestions = async () => {
  const data = await getServerVariantsData();
  const vote_id = data.id;
  const title = document.getElementById("poll__title");
  const answerButtons = document.getElementById("poll__answers");
  answerButtons.classList.add("flex__buttons");
  title.textContent = data.data.title;
  data.data.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "poll__answer";
    button.id = index;
    button.textContent = answer;
    button.addEventListener("click", (e) => getUserAnswer(e, vote_id));
    answerButtons.appendChild(button);
  });
};

document.addEventListener("DOMContentLoaded", createQuestions);
