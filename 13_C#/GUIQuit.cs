// C# .NET
//
// DocString
//
// author: Simon Renblad
// version: 0.1.0
// license: MIT

using System;
using System.Windows.Forms;
using System.Drawing;

namespace First
{
    public class MyForm : Form
    {
        
        private FlowLayoutPanel flowPanel;

        public MyForm()
        {
            InitComponents();
        }

        private void InitComponents()
        {
            Text = "Just for quitters";
            ClientSize = new Size(800, 450);
            // add stuff to frame here
            flowPanel = new FlowLayoutPanel();

            //add button
            var quitButton = new Button();
            quitButton.Text = "Quit";
            quitButton.AutoSize = true;

            //add event handler
            quitButton.Click += new EventHandler(OnClick);
            
            //add label
            var label = new Label();
            label.Text = "<- Click here to quit";
            label.AutoSize = true;

            //add button to panel
            flowPanel.Controls.Add(quitButton);
            flowPanel.Controls.Add(label);

            //add panel to frame
            Controls.Add(flowPanel);

            CenterToScreen();
        }

        void OnClick(object sender, EventArgs e) {

            Close();

        }

        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.Run(new MyForm());
        }
    }
}

