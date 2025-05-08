import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function JourneyCard() {

    const journeyData = [
        {
          id: 0,
          title: "Initial Launch (2025)",
          year: 2025,
          description: "AldebaranMovie was launched as a modern movie app built with Java, Spring Boot, and React.js, aiming to streamline movie discovery and booking with a clean, user-friendly interface."
        },
        {
          id: 1,
          title: "Feature Expansion (2026)",
          year: 2026,
          description: "Core features such as JWT authentication, advanced search, and booking were introduced. The architecture shifted to microservices with Spring Cloud and Redis caching for improved scalability."
        },
        {
          id: 2,
          title: "AI Personalization (2027)",
          year: 2027,
          description: "A recommendation engine using machine learning was added, along with mobile support via React Native and real-time analytics powered by Kafka and ElasticSearch."
        },
        {
          id: 3,
          title: "Cloud Scaling (2028)",
          year: 2028,
          description: "The platform migrated to Kubernetes with full CI/CD integration. Internationalization, compliance (GDPR/CCPA), and global deployment positioned AldebaranMovie as a scalable cloud-native solution."
        }
      ];
      
   
    return (
        <div className="mt-10 flex flex-row justify-center items-center space-x-4 gap-5">
            <FontAwesomeIcon 
            className="text-white text-xl"
            icon={faCircleArrowLeft}
            />
            {journeyData.map((data, i) => (
                <div className="bg-gray-200 p-4 space-y-4 w-60 h-80 rounded-lg">
                    <h1 className="text-lg font-bold text-red-500">{data.title}</h1>
                    <h4 className="text-sm">{data.year}</h4>
                    <p className="text-sm text-black text-justify">{data.description}</p>
                </div>
            ))}
            <FontAwesomeIcon
            className="text-white text-xl"
            icon={faCircleArrowRight} />
        </div>
    )
}