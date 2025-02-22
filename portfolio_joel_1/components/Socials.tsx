import Link from "next/link"
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socials = [
  {
    icon: <FaGithub />, path: 'https://github.com/JoelSngZhenWei'
  },
  {
    icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/joelsngzw/'
  },
]
interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </Link>
        );
      })}
    </div>
  )
}

export default Socials
