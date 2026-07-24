import "../../styles/Explore.css";
import {
  FaPizzaSlice,
  FaMapMarkerAlt,
  FaGlassCheers,
  FaUtensils,
  FaArrowRight,
} from "react-icons/fa";

function Explore() {
  const features = [
    {
      icon: <FaPizzaSlice />,
      title: "Explore Our Menu",
      description:
        "Browse handcrafted pizzas, cheesy delights, and delicious sides made fresh every day.",
      button: "View Menu",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Find Nearby Outlet",
      description:
        "Locate the nearest PizzaVerse store and enjoy hot, fresh pizzas delivered quickly.",
      button: "Locate Store",
    },
    {
      icon: <FaGlassCheers />,
      title: "Celebrate Together",
      description:
        "Perfect party combos for birthdays, college events, family gatherings, and celebrations.",
      button: "Book Event",
    },
    {
      icon: <FaUtensils />,
      title: "Catering Services",
      description:
        "Delicious catering solutions for offices, weddings, meetings, and special occasions.",
      button: "Contact Us",
    },
  ];

  return (
    <section className="explore">
      <div className="explore-heading">
        <h2>✨ Discover PizzaVerse</h2>

        <p>
          More than just pizza — everything you need for the perfect food
          experience.
        </p>
      </div>

      <div className="explore-grid">
        {features.map((item, index) => (
          <div className="explore-card" key={index}>
            <div className="explore-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <button>
              {item.button}
              <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Explore;