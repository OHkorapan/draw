import DrawingBoard from '../component/DrawingBoard';

export default function DrawPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🖌️ กระดานวาดภาพ</h1>
      <DrawingBoard />
    </div>
  );
}