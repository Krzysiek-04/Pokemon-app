import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import TimerIcon from "@material-ui/icons/Timer";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const navigationButtons = [
  {
    name: "O mnie",
    path: "/aboutme",
    exact: true,
    variant: "text",
    color: "primary",
    icon: <AccessibilityNewIcon />,
  },
  {
    name: "Stoper",
    path: "/stopwatch",
    variant: "text",
    color: "primary",
    icon: <TimerIcon />,
  },
  {
    name: "Licznik",
    path: "/counter",
    variant: "text",
    color: "primary",
    icon: <ThumbUpIcon />,
  },
  {
    name: "Lista postaci",
    path: "/character-list",
    variant: "text",
    color: "primary",
    icon: <PeopleAltIcon />,
  },
  {
    name: "Logowanie",
    path: "/login",
    variant: "text",
    color: "primary",
    icon: <PersonIcon />,
  },
  {
    name: "Rejestracja",
    path: "/registration",
    variant: "contained",
    color: "secondary",
    icon: <PersonAddIcon />,
  },
];

export default navigationButtons;
