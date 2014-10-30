import sys, thread, time
sys.path.insert(0, "../libpython/")
import Leap

class SListener(Leap.Listener):

    def on_connect(self, controller):
        print "Conectado"
        controller.enable_gesture(Leap.Gesture.TYPE_SWIPE);



    def on_frame(self, controller):
    	frame = controller.frame()
    	# hand = frame.hands
    	# pointable = frame.pointables
    	# print pointable
    	# pointable = hand.pointables
    	# fingers = hand.fingers
    	# print fingers
    	#tip = pointable.tip_position
    	#speed = pointable.tip_velocity
    	#print speed
    	print "Frame id: %d, timestamp: %d, hands: %d, fingers: %d, tools: %d, gestures: %d" % (
          frame.id, frame.timestamp, len(frame.hands), len(frame.fingers), len(frame.tools), len(frame.gestures()))

def main():
	listener = SListener()
	controller = Leap.Controller()
	controller.add_listener(listener)
	# Keep this process running until Enter is pressed
	print "Presiona Enter para salir..."
	try:
		sys.stdin.readline()
	except KeyboardInterrupt:
		pass
	finally:
		# Remove the sample listener when done
		controller.remove_listener(listener)

if __name__ == "__main__":
    main()