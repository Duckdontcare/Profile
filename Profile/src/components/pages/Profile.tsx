import { FaStar , FaGithub , FaFacebook , FaInstagram } from 'react-icons/fa';
import * as Tooltip from "@radix-ui/react-tooltip";

function Skill({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex items-center justify-between border-b py-2">
      <span className="font-medium text-gray-800">{name}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar
            key={i}
            size={18}
            className={i <= level ? 'text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-purple-600 mb-4 text-center">
        Profile
      </h1>
      <p className="text-gray-700 mb-6 leading-relaxed text-center ">
        <strong> Name </strong> Loetsakul Paovisit <br />
        <strong> NickName  </strong> Ford <br />
        <strong> Nationality  </strong> Thai <br />
        <strong> Age  </strong> 21 years <br />
        <strong> Major  </strong> Computer Engineering <strong> From </strong> Dhurakij Pundit University <br />
        
      </p >
      <h1 className="text-3xl font-bold text-purple-600 mb-4 text-center">
        Contact
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <a href="https://github.com/Duckdontcare" target="_blank" className="flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all hover:scale-105 shadow-lg">
                    <FaGithub /> GitHub
                    </a>
                </Tooltip.Trigger>

                <Tooltip.Portal>
                    <Tooltip.Content side="top" align="center" className="bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-md">
                        ไปยัง GitHub ของฉัน
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <a href="https://www.facebook.com/ford.loe.p/" target="_blank" className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg">
                    <FaFacebook /> FB
                    </a>
                </Tooltip.Trigger>

                <Tooltip.Portal>
                    <Tooltip.Content side="top" align="center" className="bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-md">
                        ไปยัง Facebook ของฉัน
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
      </div>
      <br/>
    <div className="gap-4 justify-center">

      <h2 className="text-xl font-semibold text-purple-500 mb-3 ">
        💡 ทักษะและความเชี่ยวชาญ
      </h2>
      
      <div className="space-y-2">
        <Skill name="HTML / CSS" level={3} />
        <Skill name="JavaScript" level={3} />
        <Skill name="React.js" level={3} />
        <Skill name="TypeScript" level={3} />
        <Skill name="UI/UX Design" level={3} />
        <Skill name="Lua" level={3} />
        <Skill name="Photoshop" level={3} />
        
      </div>
    </div>
    </div>
  );
}
