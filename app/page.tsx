import { Button } from '@/components/ui/button';
import Sparkles from '../components/section/sparkles';
import AvatarDemo from '@/components/section/avatar';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { people } from '@/lib/constants';

export default function Home() {
  return (
    <main>
      <section>
        <Sparkles>
          <h1>MMU tech club it the best in nairobi</h1>
          <p>MMu tech club is groein a lot in terms of tech and memebers</p>

          <div>
            <Button>Join us</Button>
            <Button>Learn More</Button>
          </div>

          <div className="flex gap-4">
            {/* <AvatarDemo
              className="flex -space-x-4"
              srcs={[
                'https://github.com/shadcn.png',
                'https://github.com/shadcn.png',
                'https://github.com/shadcn.png',
              ]}
              alt="mmu tech club"
              fallback="MMU"
            /> */}
            <div className="mb-10 flex w-full flex-row items-center justify-center">
              <AnimatedTooltip items={people} />
            </div>

            <p>5,000+ Well educated Memebers</p>
          </div>
        </Sparkles>
      </section>
    </main>
  );
}
