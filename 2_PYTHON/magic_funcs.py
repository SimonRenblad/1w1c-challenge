# C:\Users\simon\Documents\Programming_Challenge\2_PYTHON
import buffer

class Cluster:
    inv = []
    def __init__ (self, name):
        self.name = name
    def __lt__ (self, other):
        self.inv.append(other)
    def __gt__ (self, other):
        if other in self.inv:
            self.inv.remove(other)
            return other
        else:
            return
    def __abs__ (self):
        return self.inv

    def __len__ (self):
        return len(self.inv)

    def __getitem__ (self, key):
        return self.inv[key]



cluster = Cluster("Cluster1")
cluster < "pow" # in
cluster < "owow" # in
cluster > "pow" # out
"owow" < cluster # out
54 > cluster


for n in abs(cluster):
    print(n)

print(cluster[0])

buf = buffer.Buffer(20)

print(buf < 25)
