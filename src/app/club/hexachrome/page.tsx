'use client';

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {FaLinkedin,FaEnvelope} from "react-icons/fa";
import { ImageGrid } from "@/components/ui/image-grid";

interface ClubMember {
  id: number;
  name: string;
  position: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const HexachromeMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Chahat Mahajan',
    position: 'Coordinator',
    email: 'chahat_2301ai49@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/chahat-mahajan-b80767298/',
    imageUrl: '/Coordinators/HexaChrome/Chahat.jpg',
  },
  {
    id: 2,
    name: 'Keshav Mahansaria',
    position: 'Coordinator',
    email: 'keshav_2301cs23@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/keshav-mahansaria-66979229a',
    imageUrl: '/Coordinators/HexaChrome/Keshav.jpg',
  },
  {
    id: 3,
    name: 'Aryan Patil',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/aryan-patil-58393736a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/HexaChrome/AryanPatil.jpg',
  },
  {
    id: 4,
    name: 'Akash Kota',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/akash-kota-a3538a323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '',
  },
  {
    id: 5,
    name: 'Hrijoy Sikdar',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/hrijoy-sikdar-780a28311',
    imageUrl: '/SubCords/HexaChrome/HrijoySikdar.webp',
  },
  {
    id: 6,
    name: 'Lavanya Bhadani',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/lavanya-bhadani-1834b1313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/HexaChrome/lavanya.jpg',
  },
  {
    id: 7,
    name: 'Vaibhav Dalmia',
    position: 'Sub-Coordinator',
    email: 'http://www.linkedin.com/in/vaibhav-dalmia-2b1b84325',
    linkedinUrl: '#',
    imageUrl: '/SubCords/HexaChrome/VaibhavDalmia.jpg',
  }
];

export default function HexaChromePage() {
const renderMemberCard = (member: ClubMember) => (
  <div key={member.id} className="flex justify-center w-full">
    <CardContainer className="w-[320px] h-[320px]">
      <CardBody className="bg-[#ADDAEA] text-black border-white border relative group/card dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[280px] h-[400px] rounded-xl p-6 border flex flex-col justify-between">


        <CardItem translateZ="100" className="w-full mt-4">
          <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white bg-white flex items-center justify-center">
            {member.imageUrl ? (
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-white flex items-center justify-center">
                <span className="text-3xl font-bold text-orange-500 text-center px-2">
                  {member.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black dark:text-white px-2 h-[3em] flex items-center justify-center -mt-20"
        >
          <div className="line-clamp-2 leading-tight text-center">
            {member.name}
          </div>
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm font-bold px-2 h-[3em] flex items-center justify-center -mt-25"
        >
          <div className="line-clamp-2 leading-tight text-center">
            {member.position}
          </div>
        </CardItem>

        <div className="flex justify-center gap-3 mt-4">
          {member.email && (
            <CardItem
              translateZ={20}
              as="a"
              href={`mailto:${member.email}`}
              className="w-10 h-10 p-2 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-colors duration-300 flex items-center justify-center -mt-15"
              aria-label="Email"
            >
              <FaEnvelope className="w-4 h-4" />
            </CardItem>
          )}
          {member.linkedinUrl && (
            <CardItem
              translateZ={20}
              as="a"
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 p-2 rounded-full bg-gray-100 hover:bg-[#0077B5] hover:text-white transition-colors duration-300 flex items-center justify-center -mt-15"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  </div>
);
  return (
    <div className="relative min-h-screen w-full bg-white/[0.6] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/ClubLogo/Hexachrome.jpg" 
                alt="Puzzel Society" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-400 mb-6">
              HexaChrome 
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0">
              aims to provide a platform for students to learn and improve in solving puzzles such as Rubik's Cube, Cryptograms, Crosswords, Scrabble,
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">About HexaChrome</h2>
              <p className="text-black-700 dark:text-neutral-300">
                  The Hexachrome Club aims to provide a platform for students to learn and improve in solving puzzles such as Rubik's Cube, Cryptograms, Crosswords, Scrabble
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-black-700 dark:text-white mb-3">What We Do</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li> Puzzle-solving has many benefits</li>
                  <li>critical thinking skills(MUN)</li>
                  <li>Quest-ion</li>
                  <li>Pan India Quizzing fest PARAKH annually</li>
                  <li>Group discussions</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-black-700 dark:text-white mb-3">Our Events</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>PD (Public Debate)</li>
                  <li>MUN (Model United Nations)</li>
                  <li>JAM (Just A Minute)</li>
                  <li>Group Discussions</li>
                  <li>Speaking Workshops</li>
                </ul>
              </div>
            </CardBody>
          </CardContainer>

          <div className="mb-16">
            <ImageGrid 
              images={[
                "/ClubPages/Hexachrome/IMG-20241028-WA0001.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0002.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0003.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0004.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0005.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0006.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0007.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0008.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0009.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0010.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0011.jpg",
                "/ClubPages/Hexachrome/IMG-20241019-WA0013.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0058.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0060.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0062.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0069.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0071.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0073.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0075.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0077.jpg"
              ]} 
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
        <section className="mb-16 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#1E90FF" }}>Our Team</h2>


          <h2 className="text-3xl font-semibold text-center mb-6 text-orange-300 px-2 md:px-0" style={{ color: "#4169E1" }}>Coordinators</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4 md:px-0 mb-6">
            {HexachromeMembers.slice(0, 2).map((member) => (
              <div className="flex justify-center">{renderMemberCard(member)}</div>
            ))}
          </div>

          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-orange-300 px-4 md:px-0" style={{ color: "#4169E1" }}>Sub Coordinators</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4 md:px-0 mb-6">
            {HexachromeMembers.slice(2).map((member) => (
              <div className="flex justify-center">{renderMemberCard(member)}</div>
            ))}
          </div>
        </section>
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://facebook.com/hosca.iitp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/hosca_iitp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/user/CULTatIITP"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#FF0000] hover:text-white transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
} 