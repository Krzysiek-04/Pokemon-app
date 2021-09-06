import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import TimerIcon from "@material-ui/icons/Timer";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const cardsInfo = [
  {
    id: 1,
    title: "O mnie",
    description: "Poznajmy się!",
    path: "/aboutme",
    exact: true,
    icon: <AccessibilityNewIcon />,
  },
  {
    id: 2,
    title: "Stoper",
    description: "Coś tam, coś tam.",
    path: "/stopwatch",
    icon: <TimerIcon />,
  },
  {
    id: 3,
    title: "Licznik",
    description: "3...2...1...GO",
    path: "/counter",
    icon: <ThumbUpIcon />,
  },
  {
    id: 4,
    title: "Lista postaci",
    description: "Rick & Morty!",
    path: "/character-list",
    icon: <PeopleAltIcon />,
  },
  {
    id: 5,
    title: "Logowanie",
    description: "Zaloguj się",
    path: "/login",
    icon: <PersonIcon />,
  },
  {
    id: 6,
    title: "Rejestracja",
    description: " Zarejestruj się",
    path: "/registration",
    icon: <PersonAddIcon />,
  },
];

export default cardsInfo;
