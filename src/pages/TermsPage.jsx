import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";

const TermsPage = () => {
  const termsContent = {
    introduction: {
      title: "1. Introduction",
      points: [
        "1.1 Cashout Play is a game where subscribers answer questions correctly to earn points and qualify for daily and weekly draws to stand a chance to win airtime and cash prize respectively. The minimum point to qualify for a draw is 10 points. All users qualify for a draw automatically because all users get 10 points upon subscription and renewal daily. Subscription prices are N100/day and N400/week.",
        "1.2 Service is available to all MTN Nigeria customers with a valid mobile number (“Player/s”).",
        "1.3 Players must subscribe to the service by either SMS by texting CPD to 585 (daily) or CPW to 585 (weekly).",
      ],
    },
    winnerDetermination: {
      title: "2. Winner Determination",
      points: [
        "2.1 Daily Winners are selected via computer/machine draw for the grand prize and daily prizes.",
      ],
    },
    unsubscribing: {
      title: "3. Unsubscribing",
      points: [
        "3.1 Players can unsubscribe via SMS, users simply text:",
        "• Stop CPD to 585 (daily)",
        "• Stop CPW to 585 (weekly)",
        "3.2 Players will receive an SMS confirming that they have been unsubscribed from the Service.",
        "3.3 They are not eligible for the draws and the prizes.",
      ],
    },
    prizes: {
      title: "4. Prizes",
      points: [
        "4.1 Winners stand a chance to win the following prizes:",
        "DAILY PRIZE (CASH): 5,000 (10 PLAYERS)",
        "WEEKLY PRIZE (CASH): 50,000 (2 PLAYERS)",
        "DAILY PRIZE (AIRTIME): 500 (100 PLAYERS)",
      ],
    },
    general: {
      title: "5. General",
      points: [
        "5.1 Cash prizes winners will receive an SMS notifying them of their winnings and how to claim which will require them to send their bank account details or Momo accounts within 24-48 hours.",
        "5.2 Those customers with bank account details will have their cash prize automatically remitted.",
        "5.3 High end winners will need to come for a prize handover with media coverage.",
        "5.4 Airtime winners will be credited automatically within 24-48 hrs.",
        "5.5 All subscribers on subscription get 10 points, same with the subscribers on renewals to qualify for the daily draw.",
        "5.6 The service begins immediately after user subscribes.",
        "5.7 MSR Innovations Nigeria Limited reserves the right, at any time to change these terms and conditions and rules relating to its products and the service, and to modify the services at its discretion.",
        "5.8 MSR Innovations Nigeria Limited reserves the right from time to time to vary the charges of the service as may be deemed necessary in its discretion.",
        "5.9 MSR Innovations Nigeria Limited shall be entitled to terminate the service of any customer, if such customer is involved in any fraudulent activity or suspected fraudulent activity.",
      ],
    },
  };

  const Section = ({ title, points }) => (
    <AnimatedSection className="mb-8">
      <h2 className="text-2xl font-semibold text-[#2B17A0] mb-3">{title}</h2>
      <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 leading-relaxed">
        {points.map((point, index) => (
          <li key={index} className={point.startsWith("•") ? "ml-4" : ""}>
            {point.startsWith("•") ? point.substring(2) : point}
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <AnimatedSection>
        <Link
          to="/"
          className="inline-flex items-center text-[#3F23E5] hover:text-[#6D5BEF] mb-8 group"
        >
          <FaArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-[#3F23E5] mb-2 text-center">
          Cashout Play
        </h1>
        <h2 className="text-3xl font-semibold text-[#2B17A0] mb-10 text-center">
          Terms and Conditions
        </h2>
      </AnimatedSection>

      <div className="bg-white p-6 sm:p-10 rounded-lg shadow-xl">
        <Section
          title={termsContent.introduction.title}
          points={termsContent.introduction.points}
        />
        <Section
          title={termsContent.winnerDetermination.title}
          points={termsContent.winnerDetermination.points}
        />
        <Section
          title={termsContent.unsubscribing.title}
          points={termsContent.unsubscribing.points}
        />
        <Section
          title={termsContent.prizes.title}
          points={termsContent.prizes.points}
        />
        <Section
          title={termsContent.general.title}
          points={termsContent.general.points}
        />
      </div>
    </motion.div>
  );
};

export default TermsPage;
