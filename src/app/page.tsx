import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import RightSidebar from '@/components/RightSidebar';
import TimelineCanvas from '@/components/TimelineCanvas';
import BrainDumpInput from '@/components/BrainDumpInput';

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-1 pt-16 h-full overflow-hidden w-full">
        <Sidebar />
        <TimelineCanvas />
        <RightSidebar />
      </div>
      <BrainDumpInput />
    </>
  );
}
